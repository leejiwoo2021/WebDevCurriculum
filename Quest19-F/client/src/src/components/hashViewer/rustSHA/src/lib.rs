use wasm_bindgen::prelude::*;
use std::str;
use sha2::{Sha256,  Digest};

#[wasm_bindgen]
pub fn sha256(name: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(name);
    let hash: String = format!("{:X}", hasher.finalize());
    return hash;
}