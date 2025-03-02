use a_puzzle_a_day_lib::*;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
/// month: 1~12, day: 1~31
pub fn find_solution(
    month: i32,
    day: i32,
    week: i32,
    puzzle_type: i32,
    allow_flip: bool,
) -> String {
    let m = {
        let x = i32::from(month > 6);
        let y = (month - 1) - x * 6;
        Point::new(x, y)
    };
    let d = {
        let x = (day - 1) / 7 + 2;
        let y = (day - 1) % 7;
        Point::new(x, y)
    };
    let puzzle_type = match puzzle_type {
        0 => PuzzleType::DragonFjord,
        1 => PuzzleType::JarringWords,
        2 => PuzzleType::Tetromino,
        3 => PuzzleType::WeekDay,
        _x => panic!("{}", "invalid puzzle_type: {x}"),
    };
    let w = if puzzle_type == PuzzleType::WeekDay {
        let x = if week < 4 { 6 } else { 7 };
        let y = if week < 4 { week + 3 } else { week };
        Some(Point::new(x, y))
    } else {
        None
    };

    let board = Board::new_from_day_pos(m, d, w, puzzle_type);
    let blocks = Block::get_blocks(puzzle_type);
    let opts = SolverOptions {
        allow_flip,
        one_solution: true,
    };

    let sols = solve(&board, &blocks, &opts)
        .into_iter()
        .map(|s| s.board)
        .collect::<Vec<_>>();

    if sols.is_empty() {
        "".to_string()
    } else {
        sols[0].to_string()
    }
}
