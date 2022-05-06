import { useState } from 'react';

import { FeedbackTypeStep } from './Setps/FeedbackTypeStep';
import { FeedbackContentStep } from './Setps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Setps/FeedbackSuccessStep';

import bugImageUrl from '../../assets/images/bug.svg';
import ideaImageUrl from '../../assets/images/idea.svg';
import thoughtImageUrl from '../../assets/images/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSend(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}

      <footer className="text-xl text-neutral-400">
        <span>
          Feito com ❤ pelo{' '}
          <a
            className="underline underline-offset-2"
            href="https://github.com/andreseichi"
          >
            Tashiro
          </a>
        </span>
      </footer>
    </div>
  );
}
