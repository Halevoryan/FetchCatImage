import {connect} from "react-redux";
import "./index.css"

function Images({images}) {

    return (
        <div className="Images">
            <div className="MainRight  ">
                {
                    images?.map((item) => {
                            return (
                                <div key={item.id} className="catDiv  exmpl">
                                    <img src={item.url}/>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        images: state.dataReducer.images,
    }
}

export default connect(mapStateToProps)(Images)
