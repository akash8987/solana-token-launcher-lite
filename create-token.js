const { Connection, Keypair, LAMPORTS_PER_SOL } = require('@solana/web3.js');
const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
const config = require('./config');

async function main() {
    const connection = new Connection(config.RPC_URL, 'confirmed');
    const payer = Keypair.fromSecretKey(Uint8Array.from(config.PRIVATE_KEY));

    console.log("Launching token with payer:", payer.publicKey.toBase58());

    // 1. Create Mint
    const mint = await createMint(
        connection,
        payer,
        payer.publicKey,
        payer.publicKey,
        config.TOKEN_DECIMALS
    );

    console.log("Token Created! Mint Address:", mint.toBase58());

    // 2. Create Token Account
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        payer.publicKey
    );

    console.log("ATA Created:", tokenAccount.address.toBase58());

    // 3. Mint Initial Supply
    await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer.publicKey,
        config.INITIAL_SUPPLY * Math.pow(10, config.TOKEN_DECIMALS)
    );

    console.log(`Successfully minted ${config.INITIAL_SUPPLY} tokens.`);
}

main().catch(console.error);
