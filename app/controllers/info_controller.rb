class InfoController < ApplicationController
  def index
    @image = "home"
  end

  def about
    @image = "about"
  end

  def fellow
    @image = "fellow"
  end

  def contact
    @image = "contact"
  end

  def cover
   @disable_header = true
  end
end
