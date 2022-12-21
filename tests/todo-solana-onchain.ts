import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TodoSolanaOnchain } from "../target/types/todo_solana_onchain";

describe("todo-solana-onchain", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TodoSolanaOnchain as Program<TodoSolanaOnchain>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
