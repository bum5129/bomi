import { supabase } from '../utils/supabase';
import { Database } from '../types/supabase';

type Team = Database['public']['Tables']['teams']['Row'];
type TeamInsert = Database['public']['Tables']['teams']['Insert'];
type TeamUpdate = Database['public']['Tables']['teams']['Update'];

export const teamService = {
  async createTeam(teamData: TeamInsert) {
    const { data, error } = await supabase
      .from('teams')
      .insert(teamData)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateTeam(id: string, teamData: TeamUpdate) {
    const { data, error } = await supabase
      .from('teams')
      .update(teamData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async deleteTeam(id: string) {
    const { error } = await supabase
      .from('teams')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async getTeamById(id: string) {
    const { data, error } = await supabase
      .from('teams')
      .select(`
        *,
        team_members (
          *,
          users (*)
        )
      `)
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getUserTeams(userId: string) {
    const { data, error } = await supabase
      .from('teams')
      .select(`
        *,
        team_members!inner (
          *,
          users (*)
        )
      `)
      .eq('team_members.user_id', userId);
    
    if (error) throw error;
    return data;
  }
}; 