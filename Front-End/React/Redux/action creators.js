function addTodo(text) {
    const trimmedText = text.trim();
    return {
        type: 'ADD_TODO',
        text: trimmedText,
    }
}
