
export default (props) => {
	
	return(
		<div >
			{props.SnakeDots.map((item ,index) => {
				
				const style = {
					left : item[0] + "%" ,
					top : item[1] + "%" ,  
				} ; 
				
				return(
					<div	className="Snake-Dot" 
							key={index}
							style={style}
					>
					</div>
				) ; 
			})}
		</div> 
	) ; 
} ; 