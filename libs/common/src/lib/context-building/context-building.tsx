import React, { Context } from 'react';

export interface ContextWithValue<ValueType> {
  context: Context<ValueType>;
  value: ValueType;
}

export function createContextWithValue<ValueType>(
  context: Context<ValueType>,
  value: ValueType
): ContextWithValue<ValueType> {
  return {
    context,
    value,
  };
}

export function wrapWithContextProviders(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contexts: ContextWithValue<any>[],
  children: React.ReactNode
) {
  return contexts.reduce((acc, { context: CurrentContext, value }) => {
    return (
      <CurrentContext.Provider value={value}>{acc}</CurrentContext.Provider>
    );
  }, children);
}
