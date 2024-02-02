// SPDX-License-Identifier: BSD-3-Clause

pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract WavePortal {
    uint256 waves = 0;

    constructor() {
        console.log("heyyyaaaa!!!");
    }

    function wave() public {
        waves += 1;
        console.log("%s sent a wave!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We got total %d waves", waves);
        return waves;
    }
}
