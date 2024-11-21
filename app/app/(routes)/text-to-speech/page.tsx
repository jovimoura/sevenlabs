import { elevenlabs } from "@/lib/elevenlabs";

import TextToSpeech from "@/components/text-to-speech";

export default async function Home() {
  const voicesRes = await elevenlabs.voices.getAll();

  const history = await elevenlabs.history.getAll();

  const voices = voicesRes.voices;

  if (!voices) {
    return <div>Voices not found</div>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-8">
      <TextToSpeech history={history} voices={voices} />
    </main>
  );
}
