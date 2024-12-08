'use client';
import { type PropsWithChildren, useEffect, useState } from 'react';
import {
  initData,
  miniApp,
  useLaunchParams,
  expandViewport,
  viewport,
  bindViewportCssVars,
  isViewportCssVarsBound,
  useSignal,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { useTelegramMock } from '@/hooks/useTelegramMock';
import { useDidMount } from '@/hooks/useDidMount';
import { useClientOnce } from '@/hooks/useClientOnce';
import { init } from '@/core/init';

import '../../app/globals.css';

function RootInner({ children }: PropsWithChildren) {
  const [isViewportReady, setIsViewportReady] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === 'debug';

  // Initialize the library.
  useClientOnce(() => {
    init(debug);
  });

  const isDark = useSignal(miniApp.isDark);
  const initDataUser = useSignal(initData.user);

  useEffect(() => {
    if (initDataUser) {
      console.log('User data:', initDataUser); // Replace this with relevant logic.
    }
  }, [initDataUser]);

  useEffect(() => {
    async function initializeViewport() {
      try {
        await miniApp.ready();

        if (viewport.mount.isAvailable() && !viewport.isMounted()) {
          viewport.mount();
        }

        if (expandViewport.isAvailable()) {
          expandViewport();
        }

        if (viewport.isMounted() && !isViewportCssVarsBound()) {
          bindViewportCssVars();
        }

        setIsViewportReady(true); // Mark the viewport as ready once initialization is complete.
      } catch (error) {
        console.error('Ошибка инициализации viewport:', error);
        setIsViewportReady(true); // Allow rendering even if initialization fails.
      }
    }
    initializeViewport();
    
  }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import('eruda')
        .then((lib) => lib.default.init())
        .catch(console.error);
    }
  }, [debug]);

  if (!isViewportReady) {
    return <div className="root__loading">Initializing Viewport...</div>;
  }

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      {children}
    </AppRoot>
  );
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading">Loading</div>
  );
}
