class UsersController < ApplicationController
  def index
    @image = "user_index"
    @officers = User.find_by(group: "officer")
    @board = User.find_by(group: "board")
    @regular = User.find_by(group: "member")
    if(!@regular.blank?)
      @regular.sort_by{ |r| r.group.name.downcase }
    end
  end

  def show
    @image = "user_show"
  end

  def edit
  end
end
