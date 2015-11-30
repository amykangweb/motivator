class Api::VotesController < ApplicationController
  before_action :load_quote

  def create
    @vote = @quote.votes.create(vote_params)
    if @vote.save
      render json: @quote.votes, status: :created
    else
      render json: {"error" => "Could not create vote."}, status: :unprocessable_entity
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:score)
  end

  def load_quote
    @quote = Quote.find(params[:quote_id])
  end
end
