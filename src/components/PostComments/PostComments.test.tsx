import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test('Deve inserir 2 comentarios', () => {
    render(<PostComment />);

    const textarea = screen.getByTestId("campo-ip");
    const button = screen.getByRole('button', {name: /Comentar/i});

    fireEvent.change(textarea, {
      target: {value: 'primeiro comentario'},
    });
    fireEvent.click(button);
    expect(screen.getByText('primeiro comentario')).toBeInTheDocument();

    fireEvent.change(textarea, {
      target: {value: 'segundo comentario'},
    });
    fireEvent.click(button);
    expect(screen.getByText('segundo comentario')).toBeInTheDocument();
  })
});
