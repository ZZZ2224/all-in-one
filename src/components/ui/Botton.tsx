type BottonProps = {
  text: string;
};

export default function Botton({ text }: BottonProps): Response {
  if (!text.trim()) {
    return new Response("Text is required", { status: 400 });
  }

  return new Response(text, { status: 201 });
}
