
const Food = (props) => { 
		
	const style = {
		left : props.FoodDots[0] + "%" ,
		top : props.FoodDots[1] + "%", 
	} ; 
	
	return (
		<div className="Food" style={style} >
		</div>
	) ; 
} ; 

export default Food ; 