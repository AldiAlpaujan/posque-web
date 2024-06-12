import { forwardRef, Ref, JSX, ReactNode } from 'react';

// material-ui
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom, { ZoomProps } from '@mui/material/Zoom';
import Box from '@mui/material/Box';

type position = 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom' | 'top-left';
type direction = 'up' | 'right' | 'left' | 'down';
type transitionType = 'grow' | 'collapse' | 'fade' | 'slide' | 'zoom';

interface TransitionsProps {
  children: ReactNode,
  position?: position,
  type?: transitionType,
  direction?: direction;
  others?: any,
}

function _Transitions(props: TransitionsProps, ref: Ref<unknown> | undefined) {
  const { children, position = 'top-left', type = 'grow', direction = 'up', ...others } = props;

  let positionSX = {
    transformOrigin: '0 0 0'
  };

  switch (position) {
    case 'top-right':
      positionSX = {
        transformOrigin: 'top right'
      };
      break;
    case 'top':
      positionSX = {
        transformOrigin: 'top'
      };
      break;
    case 'bottom-left':
      positionSX = {
        transformOrigin: 'bottom left'
      };
      break;
    case 'bottom-right':
      positionSX = {
        transformOrigin: 'bottom right'
      };
      break;
    case 'bottom':
      positionSX = {
        transformOrigin: 'bottom'
      };
      break;
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow
          {...others}
          timeout={{
            appear: 0,
            enter: 150,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}

      {type === 'collapse' && (
        <Collapse {...others} sx={positionSX}>
          {children}
        </Collapse>
      )}

      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}

      {type === 'slide' && (
        <Slide
          {...others}
          timeout={{
            appear: 0,
            enter: 150,
            exit: 150
          }}
          direction={direction}
        >
          <Box sx={positionSX}>{children}</Box>
        </Slide>
      )}

      {type === 'zoom' && (
        <Zoom {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Zoom>
      )}
    </Box>
  );
}

const Transitions = forwardRef(_Transitions);

function popupTransition(props: JSX.IntrinsicAttributes & ZoomProps, ref: Ref<unknown> | undefined) {
  return <Zoom ref={ref} timeout={200} {...props} />;
}

export const PopupTransition = forwardRef(popupTransition);
export default Transitions;



