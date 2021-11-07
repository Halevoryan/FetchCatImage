import {useEffect} from "react"
import {connect} from "react-redux";
import "./index.css"


function SideBar({categories,  dispatch}) {

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/categories ")
            .then(res => res.json())
            .then(jsonData => dispatch({
                type: "setCategories",
                payload: jsonData
            }))
        getImagesByCategorie(5)();
    }, [])

    const getImagesByCategorie = (id) => () => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
            .then(res => res.json())
            .then(data => dispatch({
                type: "setImages",
                payload: data
            }))
    }

    return (
        <div className="SideBar">
            <div className="SideBarLeft">
                <h2>Category</h2>
                <br></br>
                    {
                        categories?.map((item) => {
                            return (
                                <div key={item.id} className={"catButton"}>
                                    <button onClick={ getImagesByCategorie(item.id)}> {item.name}</button>
                                </div>
                            )

                        })
                    }

            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        categories: state.dataReducer.categories,
    }
}

export default connect(mapStateToProps)(SideBar)
