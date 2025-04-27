import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Check if user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
      return;
    }

    // Fetch tasks for the logged-in user
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setTasks(data); // Store tasks in the state
    };

    fetchTasks();
  }, [navigate]);

  // Divide tasks into 3 categories: To Do, In Progress, Done
  const toDoTasks = tasks.filter((task) => task.status === 'To Do');
  const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
  const doneTasks = tasks.filter((task) => task.status === 'Done');

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Dashboard</h2>

      <div className="flex gap-8">
        {/* To Do Column */}
        <div className="w-1/3 bg-gray-100 p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">To Do</h3>
          {toDoTasks.length === 0 ? (
            <p className="text-gray-500">No tasks in this category.</p>
          ) : (
            toDoTasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-4 mb-4 rounded-md shadow-sm border border-gray-200"
              >
                <h4 className="font-medium text-lg">{task.title}</h4>
                <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
              </div>
            ))
          )}
        </div>

        {/* In Progress Column */}
        <div className="w-1/3 bg-gray-100 p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">In Progress</h3>
          {inProgressTasks.length === 0 ? (
            <p className="text-gray-500">No tasks in this category.</p>
          ) : (
            inProgressTasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-4 mb-4 rounded-md shadow-sm border border-gray-200"
              >
                <h4 className="font-medium text-lg">{task.title}</h4>
                <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
              </div>
            ))
          )}
        </div>

        {/* Done Column */}
        <div className="w-1/3 bg-gray-100 p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Done</h3>
          {doneTasks.length === 0 ? (
            <p className="text-gray-500">No tasks in this category.</p>
          ) : (
            doneTasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-4 mb-4 rounded-md shadow-sm border border-gray-200"
              >
                <h4 className="font-medium text-lg">{task.title}</h4>
                <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;