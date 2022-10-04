import { useState } from "react";
import { Data } from "./Data";
import "./Search.scss";
export const SearchData = () => {
  // console.log(Data);
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div className="container-form-table">
        <form>
          <input
            type="text"
            placeholder="Search filter"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        <table id="customers">
          <thead>
            <tr>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
