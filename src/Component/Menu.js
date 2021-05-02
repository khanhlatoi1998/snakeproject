
const Menu = (props) => {
	return (
		<div className="Menu" > 
					<div className="Content"> 
						<div className="Input-user"> 
							<input placeholder="nhap ten..."/>
						</div>
						<div  className="Level"> 
							<button > De  </button>
							<button > Vua  </button>
							<button > Kho  </button>
						</div>
						<button style={{backgroundColor : "blue"}}  > 
							Start 
						</button>
					</div>
		</div>
	) ; 
} ; 

export default Menu ; 
