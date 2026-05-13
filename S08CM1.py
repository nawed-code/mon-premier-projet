import tkinter as tk

# tkinter en python 
class BoutQuit(tk.Button):

    def __init__(self, root, **kwargs):
        kwargs["text"] = "quit"
        kwargs["command"] = self.leave
        tk.Button.__init__(self, root, **kwargs)
        self.__root = root

    def get_root(self):
        return self.__root

    def leave(self):
        self.__root.quit()
        self.__root.destroy()


class FleeingBoutQuit(BoutQuit):

    def __init__(self, root, **kwargs):
        BoutQuit.__init__(self, root, **kwargs)
        self.__pos = tk.LEFT
        self.bind("<Enter>", self.change_pos)

    def change_pos(self, _=None):
        self.__pos = tk.RIGHT if self.__pos == "left" else tk.LEFT
        self.pack(side=self.__pos)


class GridCanvas(tk.Canvas):

    def __init__(self, root, lines_count, columns_count, cell_size=30, gutter_size=5, margin_size=10, **kwargs):
        kwargs['width'] = cell_size * columns_count + 2 * margin_size + gutter_size * (columns_count - 1)
        kwargs['height'] = cell_size * lines_count + 2 * margin_size + gutter_size * (lines_count - 1)
        tk.Canvas.__init__(self, root, **kwargs)
        for i in range(lines_count):
            for j in range(columns_count):
                x1 = j * (cell_size + gutter_size) + margin_size
                y1 = i * (cell_size + gutter_size) + margin_size
                x2 = x1 + cell_size
                y2 = y1 + cell_size
                self.create_rectangle(x1, y1, x2, y2, tags=(f'c_{i}_{j}',))
                x = x1 + cell_size // 2
                y = y1 + cell_size // 2
                self.create_text(x, y, text=f'({i}, {j})', tags=(f't_{i}_{j}',), font=('Arial', cell_size // 5 , 'bold'))

    def set_color(self, i, j, bg, fg):
        self.itemconfigure(f'c_{i}_{j}', fill=bg)
        self.itemconfigure(f't_{i}_{j}', fill=fg)


class MyApp(tk.Tk):

    def __init__(self):
        tk.Tk.__init__(self)
        self.title("Hello World")
        self.l_greetings = tk.Label(self, text="Hello World")
        self.l_greetings.pack()
        self.c_grid = GridCanvas(self, 10, 20, cell_size=50, bg="white")
        self.c_grid.pack()
        self.c_grid.set_color(5, 10, 'orange', 'white')
        self.b_quit = FleeingBoutQuit(self, width=10)
        self.b_quit.pack()


if __name__ == "__main__":
    app = MyApp()
    app.mainloop()
