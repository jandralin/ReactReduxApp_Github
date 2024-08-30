import axios from "axios";
import { setRepos } from "../../reducers/reposSlice";

export const getRepos = (searchQuery = "stars:%3E1") => {
	if(searchQuery == "") {
		searchQuery = "stars:%3E1"
	}
	return async (dispatch) => {
		const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}+in:name&sort=stars`);
		dispatch(setRepos(response.data))
	}
}

