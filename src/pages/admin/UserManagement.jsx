
function AdminHub() {

    return (
        <>
            <div>
                
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Manage your travel packages, bookings, and users</p>
            </div>

           
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-label">Total Bookings</div>
                    <div className="stat-value">2,345</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Active Packages</div>
                    <div className="stat-value">24</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Total Users</div>
                    <div className="stat-value">1,829</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Destinations</div>
                    <div className="stat-value">12</div>
                </div>
            </div>

           
            <div className="tab-nav">
                <div className="tab">Bookings</div>
                <div className="tab active">Packages</div>
                <div className="tab">Users</div>
            </div>

            
            <div className="packages-container">
                <div className="packages-header">
                    <div className="packages-title">
                        <h2>Travel Packages</h2>
                        <p>Manage your travel package offerings</p>
                    </div>
                    <button className="add-package-btn" id="addPackageBtn">
                        Add Package
                    </button>
                </div>

                <div className="packages-content">
                    <div className="packages-placeholder">
                        Package management interface coming soon...
                    </div>
                </div>
            </div>
           

            
            <div className="table-container">
                <div className="table-header">
                    <h2>Recent Bookings</h2>
                    <p>Manage and track customer bookings</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Search bookings..." />
                    </div>
                </div>

                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Package</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>John Doe</td>
                            <td>Maldives Paradise</td>
                            <td>2024-01-15</td>
                            <td><span className="status confirmed">confirmed</span></td>
                            <td>$2,499</td>
                            <td>
                                <button className="action-btn edit">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>Jane Smith</td>
                            <td>Dubai Luxury</td>
                            <td>2024-01-14</td>
                            <td><span className="status pending">pending</span></td>
                            <td>$3,199</td>
                            <td>
                                <button className="action-btn edit">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>Mike Johnson</td>
                            <td>Bali Adventure</td>
                            <td>2024-01-13</td>
                            <td><span className="status confirmed">confirmed</span></td>
                            <td>$1,899</td>
                            <td>
                                <button className="action-btn edit">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Sarah Williams</td>
                            <td>Zanzibar Beach</td>
                            <td>2024-01-12</td>
                            <td><span className="status cancelled">cancelled</span></td>
                            <td>$1,599</td>
                            <td>
                                <button className="action-btn edit">Edit</button>
                                <button className="action-btn delete">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
       
            </div>

           

            <div>

                <div className="user-management-container">
                <div className="user-management-header">
                    <div className="user-management-title">
                        <h2>User Management</h2>
                        <p>Manage registered users and permissions</p>
                    </div>
                    <button className="add-user-btn" id="addUserBtn">
                        Add User
                    </button>
                </div>

                <div className="user-management-content">
                    <div className="users-placeholder">
                        User management interface coming soon...
                    </div>
                </div>
            </div>
        
            </div>

        </>

    )
}
export default AdminHub;
        
        
        
        

