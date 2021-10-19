import axios from "axios";
import { Quize } from "../quize";

type quizeData = { success: boolean; quizes: Quize[] };
export default async function getThequizeFromServer(Token: string) {
  try {
    const response = await axios.get<quizeData>(
      "https://Quize-app-server.jaysinghdhakad.repl.co/quizes"
    );
    return response.data.quizes;
  } catch (error) {
    return [];
  }
}
