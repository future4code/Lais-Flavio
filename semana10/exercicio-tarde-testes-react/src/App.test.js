import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import App from "./App";
import Post from './components/Post'


describe('Renderização inicial', () => {

  test('Input deve aparecer na tela', () => {
    const {getByPlaceholderText} = render(<App />)

    const input = getByPlaceholderText('Novo post')
    expect(input).toBeInTheDocument()
  })

  test('Botão deve aparecer na tela', () => {
    const {getByText} = render(<App />)

    expect(getByText(/Adicionar/)).toBeInTheDocument()
  })
})

describe('Ao criar uma tarefa', () => {
  test('ela deve aparecer na tela, com o mesmo texto digitado no input', () => {
    const {getByPlaceholderText} = render(<App />)
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'Tarefa de teste'
    }})
    expect(input).toHaveValue('Tarefa de teste')
  })

  test('quando o usuario digita e clica em criar tarefa', () => {
    const {getByPlaceholderText, getByText} = render(<App />)
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'Tarefa de teste'
    }})

    const button = getByText(/Adicionar/)
    fireEvent.click(button)

    expect(getByText(/Tarefa de teste/)).toBeInTheDocument()

  })

  test('quando o usuario digita e clica em criar tarefa, o input deve ser limpo', () => {
    const {getByPlaceholderText, getByText} = render(<App />)
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'Tarefa de teste'
    }})

    const button = getByText(/Adicionar/)
    fireEvent.click(button)

    expect(input).toHaveValue('')

  })
})


describe('Apaga post', () => {
  test('deve remover post adicionado', () => {
    const {getByPlaceholderText, getByText} = render(<App />)
    const button = getByText(/Adicionar/)
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'Tarefa de teste'
    }})
    fireEvent.click(button)
    fireEvent.click(getByText('Apagar'))
    expect(getByText('Apagar')).toHaveValue('')
  })
})

