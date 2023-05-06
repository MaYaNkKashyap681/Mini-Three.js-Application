# Mini-Three.js-Application


<img src = "https://res.cloudinary.com/dib5nqqso/image/upload/v1683374163/Screenshot_37_h7pvsl.png"/>

<h3>Live Link</h3>
<a href = "mini-three-js-application.vercel.app">Try out the App</a>

<h3>To Run the App steps to be followed -></h3>
<ol>
<li>Clone the Repository and open it in terminal.</li>
<li>Change directory to 3dTodo  {cd 3dTodo}</li>
<li>write npm install</li>
<li>write npm run dev</li>
<li>open another terminal</li>
<li>change directory to todoappbackend {cd todoappbackend}</li>
<li>write npm install in terminal</li>
<li>write nodemon index.js</li>

</ol>

<h1>Technologies Used</h1>

<p>FrontEnd</p>
<ul>
<li>React</li>
<li>Tailwind</li>
<li>Three Js</li>
</ul>


<p>BackendEnd</p>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
</ul>


<h3>API Endpoints</h3>
<table>
<tr>
<th>Endpoint</th>
<th>Method</th>
<th>Purpose</th>
</tr>

<tr>
<td>/all</td>
<td>GET</td>
<td>To get list of all tasks</td>
</tr>

<tr>
<td>/add</td>
<td>POST</td>
<td>To add new Task</td>
</tr>

<tr>
<td>/del/:id</td>
<td>DELETE</td>
<td>To delete the task by id</td>
</tr>

<tr>
<td>/complete/:id</td>
<td>PATCH</td>
<td>To mark the task completed</td>
</tr>

<tr>
<td>/updateTask/:id</td>
<td>PATCH</td>
<td>To update the Task title</td>
</tr>

</table>







