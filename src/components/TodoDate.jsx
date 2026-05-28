export default function TodoDate({ id }) {
    const date = new Date(id);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return (
        <span className="todo__date">
            {year}.{month}.{day}
        </span>
    );
}
