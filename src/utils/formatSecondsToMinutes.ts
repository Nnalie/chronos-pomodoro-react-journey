export function formatSecondsToMinutes(seconds: number) {
  /* Captura os minutos e formata usando o padStart que caso não tenha um
  número com duas casas ele adiciona o '0' na frente.
  */
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");

  /* Captura os segundos restantes e formata usando o padStart que caso não tenha um
  número com duas casas ele adiciona o '0' na frente.
  */
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${minutes}:${secondsMod}`;
}
