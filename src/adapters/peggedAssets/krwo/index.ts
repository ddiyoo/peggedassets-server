import { addChainExports } from "../helper/getSupply";

// Each chain has its own GimSwap contract and matching Open Voucher collateral,
// so these supplies are native issuance rather than bridged copies.
const chainContracts = {
  klaytn: {
    issued: ["0x7FC692699f2216647a0E06225d8bdF8cDeE40e7F"],
  },
  bsc: {
    issued: ["0x5868A0Bc3a64CFf82e19A135E17fE18E18E03bC1"],
  },
};

const adapter = addChainExports(chainContracts, undefined, {
  pegType: "peggedKRW",
});

export default adapter;
