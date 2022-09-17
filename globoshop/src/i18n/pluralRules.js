// ChoicesLength:-> no items | item | items --> gave us 2 choices
// choice:-> is the number passed to t('name', choice) function
// Returns:-> the index of the choice to use

function arPluralizationRules(choice, choicesLength) {
  choice = Math.abs(choice);
  let zero, single, dual, plural;
  const choicesIndexes = [0, 1, 2, 3];
  if (choicesLength >= 4) {
    [zero, single, dual, plural] = choicesIndexes;
  } else if (choicesLength === 3) {
    [single, dual, plural] = choicesIndexes;
    zero = plural;
  } else {
    return 0;
  }

  if (choice === 0) return zero;
  if (choice === 1) return single;
  if (choice === 2) return dual;
  return plural;
}

export default {
  ar: arPluralizationRules,
};
