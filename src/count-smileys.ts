function countSmiley(smileys: string[]): number {
  return smileys.filter((item) => item.match(/[:;][-~]?[)D]/g)).length;
}

export { countSmiley };
