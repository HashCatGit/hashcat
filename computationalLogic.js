const CryptoJS = require('crypto-js');

function calculatingResults(cycle_hashes) {
    // Concatenate the last two transaction hashes (already sorted during the query)
    const reference_sign_text = cycle_hashes[0] + cycle_hashes[1];
    const reference_hash = CryptoJS.SHA256(reference_sign_text).toString();
    const composer_arr = [];

    cycle_hashes.forEach(value => {
        const difference = (BigInt(value) - BigInt(`0x${reference_hash}`)).toString(16);
        composer_arr.push({
            tx_hash: value,
            difference: difference.replace('-', '')
        });
    });

    // Sort the composer_arr by difference in ascending order
    composer_arr.sort((obj1, obj2) => {
        const diff1 = BigInt(`0x${obj1.difference}`);
        const diff2 = BigInt(`0x${obj2.difference}`);
        return diff1 < diff2 ? -1 : diff1 > diff2 ? 1 : 0;
    });

    // Convert the object into an array and return the first 10 elements
    return composer_arr.slice(0, 10);
}

const cycle_hashes = [
    "0xd6a33550222441a567794f4c3420f280a843975304f60e20912858105ceb1980",
    "0xe6c4116367c27552f95bc7e95fdb9f42389c30d93657fb5c2c2f87fe863e6ac0",
    "0xd443d88190aa7e978be90a32feaea40170365e714b4b88906c613f3324f9c9d4",
    "0xe8b6b0181b175963b5187cf91deee7040e9b64dcd40c3d7bde1ffd50076490d6",
    "0xeea6e7fe2b412eed62c8080d63f8e42a057a4484bcce3d90fd0a83a5c8276656",
    "0xf062465321996b342ece02990a41ba67f504c25ffbd29ed7fb52d08b42c57b32",
    "0xf2a56bc49ff7fbfc56d69fd5759b3d6f28fa93a1ab3750428d07183e5e22865f",
    "0xbdb5ad4789feda321363aacb438c0fc565d82b9667eafdecc7d50013cd6f62d0",
    "0xbc7a53a46bd042dd3cec22debb05e24829f9b2c95290d06643864e6f326fa61f",
    "0x9e11a1c9c7bd977c0aa34f8d7283d01748b377bcd4c6249a17f760e456ae8cc0"];

const top_10_composer = calculatingResults(cycle_hashes);
console.log(top_10_composer);
