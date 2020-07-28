import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import App from "./App";


describe('Renderização inicial', () => {
  test('Input deve aparecer na tela', () => {
    const {getByPlaceholderText} = render(<App />)
    expect(getByPlaceholderText('Novo post'))
  })
})