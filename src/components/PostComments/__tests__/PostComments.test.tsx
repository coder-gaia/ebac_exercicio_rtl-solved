import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';

describe('PostComment component tests', () => {
    test('Must render the component correctly', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Must add two comments correctly', () => {
        render(<Post/>)

        const commentInput = screen.getByRole('textbox')
        fireEvent.change(commentInput, {target: {value: 'First Comment'}})

        const addButton = screen.getByTestId('btn-add-comment')
        fireEvent.click(addButton)

        expect(screen.getByText('First Comment')).toBeInTheDocument()

        fireEvent.change(commentInput, {target: {value: 'Second Comment'}})
        fireEvent.click(addButton)

        expect(screen.getByText('Second Comment')).toBeInTheDocument()
    })
});