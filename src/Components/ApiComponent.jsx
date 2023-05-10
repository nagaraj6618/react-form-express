import React, { Component } from 'react'
import axios from 'axios'

export class ApiComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errorMessage :''
      }
    }

    componentDidMount(){
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data.results})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMessage: 'Error in Retrieving Data'})
        })
    }

    render() {
        const {posts , errorMessage} = this.state
        return (
        <React.Fragment>
            <div
                className='flex justify-center p-2 bg-slate-300 text-lg'
            >
                <div
                    className='grid grid-cols-2 gap-10'
                >
                    <div
                        className='col-span-2  text-center text-black font-bold mt-10 h-[75px] rounded-md shadow-slate-900 '
                    >
                        <h1
                            className='text-[55px] text-bold h-full flex justify-center align-center'
                        >Rick and Morty </h1>
                    </div>
                    {posts.length
                        ?posts.map(post=>
                            <div key={post.id}
                                className='list-none bg-slate-700 shadow-slate-700 rounded-md px-5 pb-2 text-white flex  justify-between line-clamp-6 py-4'
                            >
                                <div
                                    className='w-[50%]'
                                >
                                    <ul>
                                        <li>
                                            <img src= {post.image} className='object-fit' />
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className='w-[50%]'
                                >
                                    <ul>
                                        <li>
                                            <h1
                                                className='text-3xl font-bold'
                                            >
                                                {post.name}</h1>
                                        </li>
                                        <li
                                            className='text-xl'
                                        >
                                            <span>{post.status} - {post.species}</span> 
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <p
                                                className='text-md text-slate-500'
                                            >Last Known location:</p>
                                        </li>
                                        <li>
                                            <span>{post.location.name}</span>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <p
                                                className='text-md text-slate-500'
                                            >First seen in:</p>
                                        </li>
                                        <li>
                                            <span>{post.origin.name}</span>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>)
                        
                        :null}

                    {errorMessage
                        ?<div>{errorMessage}</div>
                        :null
                    }
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default ApiComponent