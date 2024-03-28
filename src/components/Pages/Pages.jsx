
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookSave } from "../localStorage";


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};




const Pages = () => {
    const books = useLoaderData();
    const [addBooks, setAddBooks] = useState([]);

    useEffect(() => {
        const storeId = getBookSave();
        if (books.length > 0) {
            const addBook = [];
            for (const id of storeId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    addBook.push(book)
                }
            }
            setAddBooks(addBook)
        }
    }, [books]);


    return (
        <div className='font-family'>
            <BarChart
                width={1270}
                height={655}
                data={addBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {addBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Pages;