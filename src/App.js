import './App.css';
import Snake from './Component/Snake.js' ; 
import Food from './Component/Food.js' ;
import Menu from './Component/Menu.js'
import Show from './Component/Show.js' ; 
import {useState , useEffect } from 'react' ; 


function App() {
 
	const RandomFood = () => {
		const x = (Math.floor(Math.random()*50))*2  ; 
		const y = (Math.floor(Math.random()*50))*2 ;
		return [x ,y] ; 
	} ; 	 
	
	const [FoodDots , setFoodDots] = useState(RandomFood) ; 
	
	const [SnakeDots , setSnakeDots] = useState([
		[0 , 0] ,
		[2 , 0] , 
		[4 , 0] ,
		[6 , 0 ,] , 
	]) ;
	
	const [ShowMenu , setShowMenu ] = useState(false) ;   
	
	const [Diretion , setDiretion] = useState("RIGHT") ; 
	const [Speed , setSpeed] = useState(70) ;
	
	const initialSnake = () => {
				setSnakeDots([
					[0 , 0] ,
					[2 , 0] , 
					[4 , 0] ,
					[6 , 0 ] ,
				]) ; 
			if(Diretion !== "RIGHT")
				setDiretion("RIGHT") ; 
			else{setDiretion("DIRETION")}
			setShowMenu(true) ; 
		} ; 
	
	useEffect(() => { 
	 	document.onkeydown = onKeydown ;
		const close = setInterval(() => {moveSnake()} , Speed); 
		return () => clearInterval(close) ; 
	} , [Diretion , Speed ]  ) ; /*truyen tham so rong [] vao thi effect se duoc goi nhung khong render , khong duoc de tham so trống */  

	const onKeydown = (e) => {
		e = e || window.event ; 
		switch (e.key) {
			case "ArrowUp" : 
				if(Diretion !== "DOWN"  )
					{ setDiretion("UP") ; } ;
			break ; 
			case "ArrowDown" : 
				if(Diretion !== "UP")
					{setDiretion("DOWN") ; } ;  
			break ; 
			case "ArrowLeft" : 
				if(Diretion !== "RIGHT" &&  Diretion !== "DIRETION")
					{ setDiretion("LEFT") ; } 
			break ; 
			case "ArrowRight" : 
				if(Diretion !== "LEFT" &&  Diretion !== "DIRETION")
					{ setDiretion("RIGHT") ; } ;  
			break ;

		} ; 	
	} ;  
	
	const checkSnake = () => {
		var ifSnake = [...SnakeDots] ; 
		var head78 = ifSnake[ifSnake.length - 1] ; 
		ifSnake.pop() ; /* chu y ifSnake = [...SnakeDots]*/
		ifSnake.forEach((item) => {
			if(head78[0] === item[0] && head78[1] === item[1]) 
				initialSnake() ;
		}) ; 
	} ; 
	
	const moveSnake = () => {	 
		let dots = SnakeDots ;
		let head = dots[dots.length - 1] ; /*phan biet dot nao la dau , dot nao la duoi*/
		switch (Diretion) {
			case "RIGHT" : 			
				head = [head[0] + 2 , head[1]] ; 
			break ; 
			case "DIRETION" :
				head = [head[0] + 2 , head[1]] ; 
			break ; 
			case "LEFT" : 
				head = [head[0] - 2 , head[1]] ; 
			break ;
			case "UP" : 
				head = [head[0] , head[1] - 2] ; 
			break ;
			case "DOWN" : 
				head = [head[0] , head[1] + 2 ] ;
			break ;	
		} ;		
		
		if(head[0] > 98 || head[0] < 0 || head[1] > 98 || head[1] < 0 ){
			initialSnake() ; 
		} 
		else{dots.push(head) ; 
			if(head[0] !== FoodDots[0] || head[1] !== FoodDots[1] )
				{ dots.shift() ; } 
			setSnakeDots([...dots]) ; 
			if(head[0] === FoodDots[0] && head[1] === FoodDots[1])
				{ setFoodDots(RandomFood) ; }
		
		} ; 
		checkSnake();
	} ; 
	
	const closeShowMenu = () => {
		setShowMenu(false) ;
	} ; 
	
	const left = () => { if(Diretion !== "RIGHT" &&  Diretion !== "DIRETION")setDiretion("LEFT") } ; 
	const up = () => { if(Diretion !== "DOWN"  )setDiretion("UP") } ; 
	const right = () => { if(Diretion !== "LEFT" &&  Diretion !== "DIRETION")setDiretion("RIGHT") } ; 
	const down = () => { if(Diretion !== "UP")setDiretion("DOWN") } ; 
	
  return (
	<div >
		<div className="Game-Snake"  >
			<Snake SnakeDots={SnakeDots} />	
			<Food FoodDots={FoodDots} /> 
			{	ShowMenu === true 
				? 	<div className="ShowMenu">
						<button onClick={closeShowMenu}>	
							<span className="far fa-window-close" > </span>
						</button>
						<p className="content"> Hello Bạn Heo Mập! </p>
					</div>
				: 	<div></div>
			}
		</div>
		<div className="Button-control" > 
			<button onClick={left}> <span className="fas fa-angle-left fa-3x" ></span> </button>	
			<button onClick={right}> <span className="fas fa-angle-right fa-3x" > </span> </button>
			<button onClick={up}> <span className="fas fa-angle-up fa-3x" > </span> </button>
			<button onClick={down}> <span className="fas fa-angle-down fa-3x" > </span> </button>
		</div>
	</div >
  );
}

export default App;
