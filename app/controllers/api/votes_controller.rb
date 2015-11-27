class Api::VotesController < ApplicationController
  before_action :load_quote

  def create
    @vote = @quote.votes.create(vote_params)
    if @vote.save
      render json: @vote, status: :created
    else
      render json: {"error" => "Could not create vote."}, status: :unprocessable_entity
    end
  end

  def destroy
    @vote = @quote.votes.find(params[:id])
    if @vote.destroy
      render json: @quote.votes
    else
      render json: {"error" => "Something went wrong. Could not destroy vote."}
    end
  end

  private

  def vote_params
    params.require(:votes).permit(:score)
  end

  def load_quote
    @quote = Quote.find(params[:quote_id])
  end
end
