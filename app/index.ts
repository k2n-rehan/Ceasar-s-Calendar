import './style.scss';

// Load Rust WebAssembly module
const rust = import('../public/pkg/index');

const HINT_ID = "hint";
const BOARD_TABLE_ID = "board-table";
const MONTH_FORM_ID = "month-form";
const DAY_FORM_ID = "day-form";
const WEEKDAY_FORM_ID = "weekday-form";
const SOLVE_BUTTON_ID = "solve-button";

function buttonOnClick() {
    const m_form = <HTMLSelectElement>document.getElementById(MONTH_FORM_ID);
    const month = m_form.selectedIndex + 1;
    const d_form = <HTMLSelectElement>document.getElementById(DAY_FORM_ID);
    const day = d_form.selectedIndex + 1;
    const w_form = <HTMLSelectElement>document.getElementById(WEEKDAY_FORM_ID);
    const weekday = w_form.selectedIndex;
    
    resetBoard();
    callSolver(month, day, weekday).then(result => {
        console.log(result);
        renderTable(month, day, weekday, result);
    });
}

function resetBoard() {
    let hint = document.getElementById(HINT_ID);
    hint.innerText = "";
}

async function callSolver(month: number, day: number, weekday: number): Promise<string> {
    if (!(1 <= month && month <= 12 && 1 <= day && day <= 31 && 0 <= weekday && weekday < 7)) {
        throw new Error(`Error: invalid date: ${month}, ${day}`);
    }

    let r = await rust.then(m => {
        return m.find_solution(month, day, weekday, 3, false /* allow_flip */);
    });
    if (r !== "") {
        return r;
    }

    let hint = document.getElementById(HINT_ID);
    hint.innerText = "(No solution without flipping pieces.)";

    return await rust.then(m => {
        return m.find_solution(month, day, weekday, 3, true);
    });
}

function addOptions() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();

    const m_form = <HTMLSelectElement>document.getElementById(MONTH_FORM_ID);
    months.forEach(m => {
        const opt = document.createElement("option");
        opt.text = m;
        m_form.add(opt);
    });
    m_form.selectedIndex = today.getMonth();

    const d_form = <HTMLSelectElement>document.getElementById(DAY_FORM_ID);
    for (let i = 1; i <= 31; i++) {
        const opt = document.createElement("option");
        opt.text = i.toString();
        d_form.add(opt);
    }
    d_form.selectedIndex = today.getDate() - 1;

    const w_form = <HTMLSelectElement>document.getElementById(WEEKDAY_FORM_ID);
    weekdays.forEach(w => {
        const opt = document.createElement("option");
        opt.text = w;
        w_form.add(opt);
    });
    w_form.selectedIndex = today.getDay();
}

function renderTable(month: number, day: number, weekday: number, board_str: string) {
    const HEIGHT = 8;
    const WIDTH = 7;
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const COLOR_DICT = {
        "0": "crimson",
        "1": "pink",
        "2": "indigo",
        "3": "cyan",
        "4": "teal",
        "5": "green",
        "6": "palegoldenrod",
        "7": "orange",
        "8": "gray",
        "M": "tan",
        "D": "tan",
        "#": "white",
    };

    let board = [];
    for (const l of board_str.trim().split("\n")) {
        const cs = l.trim().split(" ");
        if (cs.length !== WIDTH) {
            console.log("unexpected board width: ", cs);
        }
        board.push(cs);
    }
    if (board.length !== HEIGHT) {
        console.log("unexpected board height: ", board.length, board);
    }

    const table = <HTMLTableElement>document.getElementById(BOARD_TABLE_ID);
    table.innerText = "";
    for (let i = 0; i < HEIGHT; i++) {
        let row = <HTMLTableRowElement>table.insertRow(i);
        for (let j = 0; j < WIDTH; j++) {
            let cell = row.insertCell(j);
            let div = document.createElement("div");
            div.className = "cell";
            let color = COLOR_DICT[board[i][j]];
            div.style.backgroundColor = color;

            if (board[i][j] === "M") {
                div.innerText = MONTHS[month-1];
            } else if (board[i][j] === "D") {
                div.innerText = day.toString();
            } else if (board[i][j] === "W") {
                div.innerText = WEEKDAYS[weekday];
            }
            cell.appendChild(div);
        }
    }
}

function initialize() {
    document.getElementById(SOLVE_BUTTON_ID).onclick = buttonOnClick;
    addOptions();
}

initialize();