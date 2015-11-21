class Api::QuotesController < ApplicationController

  def index
    quotes = Quote.all
    render json: quotes
  end

  private

  def quote_params
    params.require(:quote).permit(:body, :author, :category)
  end
end
