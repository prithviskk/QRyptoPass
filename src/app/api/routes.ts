import {NextRequest,NextResponse} from "next/server";
import { connectDB} from "@/lib/db";

export async function GET(req : NextRequest ){
    await connectDB();
    console.log(`Connected`);
    return NextResponse.json({message:"Connected to the database"})
}