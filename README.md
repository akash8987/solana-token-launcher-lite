# Solana Token Launcher Lite

An expert-grade, streamlined utility for deploying and managing SPL tokens on the Solana blockchain. This repository provides a clean, single-directory implementation for developers to understand the lifecycle of a Solana token, from creation to supply management.

## Features
- **SPL Token Creation**: Deploy a new token mint with custom decimals.
- **Metadata Integration**: Logic for attaching On-chain metadata.
- **Minting & Transferring**: Helper scripts for managing token supply.
- **Authority Control**: Securely revoke mint or freeze authorities.

## Prerequisites
- Node.js (v18 or higher)
- A Solana Wallet (Private Key)
- Devnet/Mainnet RPC URL

## Quick Start
1. Add your private key to `config.js`.
2. Run `npm install`.
3. Execute `node create-token.js` to launch your asset.
