class Api::QuotesController < ApplicationController

  def index
    motivational = Quote.where(category: "Motivational")
    funny = Quote.where(category: "Funny")
    sad = Quote.where(category: "Sad")
    render json: {"motivational" => motivational, "funny" => funny, "sad" => sad}
  end

  private

  def quote_params
    params.require(:quote).permit(:body, :author, :category)
  end
end
