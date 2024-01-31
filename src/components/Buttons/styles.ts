import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import { Link } from 'react-router-dom'

export const GameButton = styled.button`
  font-size: 18px;
  background-color: #008542;
  color: #fff;
  text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  z-index: 1;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: unset;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-weight: 900;
  transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  margin-top: 10px;

  &:before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
    z-index: -1;
    background-color: #008542 !important;
    box-shadow:
      0 -4px rgb(21 108 0 / 50%) inset,
      0 4px rgb(100 253 31 / 99%) inset,
      -4px 0 rgb(100 253 31 / 50%) inset,
      4px 0 rgb(21 108 0 / 50%) inset;
  }

  &:after {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
    transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
  }

  &:hover:before {
    box-shadow:
      0 -4px rgb(0 0 0 / 50%) inset,
      0 4px rgb(255 255 255 / 20%) inset,
      -4px 0 rgb(255 255 255 / 20%) inset,
      4px 0 rgb(0 0 0 / 50%) inset;
  }

  &:hover:after {
    box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
  }

  &:active {
    transform: translateY(4px);
  }

  &:active:after {
    box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
  }
`
export const Button = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6em 2em;
  border: ${colors.buttonColor} solid 0.15em;
  border-radius: 0.25em;
  color: ${colors.textWhite};
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition:
    border 300ms,
    color 300ms;
  user-select: none;

  p {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    z-index: 1;
  }

  &:hover {
    color: ${colors.backgroundMain};
  }

  &:active {
    border-color: teal;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: ${colors.buttonColor};
    opacity: 50%;
    border-radius: 50%;
    transition:
      transform 500ms,
      background 300ms;
  }

  &::before {
    left: 0;
    transform: translateX(-8em);
  }

  &::after {
    right: 0;
    transform: translateX(8em);
  }

  &:hover:before {
    transform: translateX(-1em);
  }

  &:hover:after {
    transform: translateX(1em);
  }

  &:active:before,
  &:active:after {
    background: teal;
  }
`
export const ButtonCV = styled.a`
  --b: 2px;
  --s: 0.45em;
  --color: ${colors.jsonYellow};

  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      transparent 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition:
    0.3s linear,
    color 0s,
    background-color 0s;
  outline: var(--b) solid transparent;
  outline-offset: 0.6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }

  &:active {
    background: var(--color);
    color: ${colors.backgroundMain};
  }
`
export const SkillButton = styled.li`
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: ${colors.textWhite};
  z-index: 1;
  background: ${colors.backgroundMain};
  position: relative;
  font-weight: 700;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: ${colors.textWhite};
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  &:hover {
    color: ${colors.backgroundMain};
  }

  &:hover::before {
    width: 100%;
  }
`
export const FormButton = styled.button`
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149cea;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: ${colors.backgroundMain};
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: '';
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: ${colors.backgroundMain};
    transition: 0.5s;
    z-index: 2;
  }

  &:hover::before,
  &:hover::after {
    transform: scale(0);
  }

  &:hover {
    box-shadow: inset 0px 0px 25px #1479ea;
  }
`
