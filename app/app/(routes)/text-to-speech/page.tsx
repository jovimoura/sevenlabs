import { elevenlabs } from "@/lib/elevenlabs";

import TextToSpeech from "@/components/text-to-speech";
import { getHistoryFiles } from "../../actions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth()
  const voicesRes = await elevenlabs.voices.getAll();
  const history = (await getHistoryFiles(userId!)).filter(history => history.text && history.text.length > 0)

  const voices = voicesRes.voices;

  if (!voices) {
    return <div>Voices not found</div>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen overflow-y-hidden">
      <TextToSpeech history={history} voices={voices} />
    </main>
  );
}
