<LazilyLoad modules={{
    TodoHandler: () => importLazy(import('./components/TodoHandler')),
    TodoMenuHandler: () => importLazy(import('./components/TodoMenuHandler')),
    TodoMenu: () => importLazy(import('./components/TodoMenu')),
}}>
{({TodoHandler, TodoMenuHandler, TodoMenu}) => (
    <TodoHandler>
        <TodoMenuHandler>
            <TodoMenu />
        </TodoMenuHandler>
    </TodoHandler>
)}
</LazilyLoad>



<LazilyLoad modules={{
    TodoHandler: () => import('./components/TodoHandler'),
    TodoMenuHandler: () => import('./components/TodoMenuHandler'),
    TodoMenu: () => import('./components/TodoMenu'),
}}>
    {({TodoHandler, TodoMenuHandler, TodoMenu}) => (
        <TodoHandler>
            <TodoMenuHandler>
                <TodoMenu />
            </TodoMenuHandler>
        </TodoHandler>
    )}
</LazilyLoad>

