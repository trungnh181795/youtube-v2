import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Background, SearchButton } from './style'

const SearchBar = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Background
      component="form"
      onSubmit={handleSubmit}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <Search />
      </SearchButton>
    </Background>
  );
};

export default SearchBar;
