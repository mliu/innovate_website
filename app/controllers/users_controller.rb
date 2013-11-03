class UsersController < ApplicationController
  def index
    @officers = User.find_by(group: "officer")
    @board = User.find_by(group: "board")
    @regular = User.find_by(group: "member")
  end

  def show
  end

  def edit
  end
end
