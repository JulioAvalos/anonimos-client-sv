export interface IBlockchain {
    data: string;
    proof: number;
    block_id: number;
    created_at: string;
    previous_hash: string;
}

export interface IBlockchainResponse {
    lenght: number;
    chain: IBlockchain[];
}